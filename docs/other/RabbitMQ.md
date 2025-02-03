# RabbitMQ 

RabbitMQ is a message queueing system that follows the Advanced Message Queuing Protocol (AMQP). It is used to send messages between different systems, microservices, or even different parts of an application. It's helpful in distributed applications where reliability and communication between components are critical.

---

## Key features of RabbitMQ:

### Message Queues:
RabbitMQ stores messages in queues, which can then be consumed by various services.

### Routing:
It allows messages to be routed to different queues based on routing rules.

### Reliability:
It ensures message durability (storing messages on disk) and supports message acknowledgment, making sure messages are reliably delivered.

### Scalability:
RabbitMQ can scale by clustering multiple instances, allowing for high availability and load balancing.

### Flexible Messaging Patterns:
It supports different messaging patterns such as publish/subscribe, request/reply, and point-to-point communication.

### Management and Monitoring:
RabbitMQ comes with a web-based management interface for monitoring queues, exchanges, and connections.

---

## Key Concepts in RabbitMQ:

- **Producer:** The entity that sends messages to the queue.
- **Queue:** A buffer that holds messages until they can be processed by a consumer.
- **Consumer:** The entity that receives and processes messages from the queue.
- **Exchange:** A routing mechanism that decides how to route messages to one or more queues.
    - **Direct Exchange:** Routes messages with a specific routing key.
    - **Topic Exchange:** Routes messages based on routing keys that match patterns.
    - **Fanout Exchange:** Routes messages to all bound queues.

- **Binding:** A link between an exchange and a queue that tells the exchange where to send the message. The pattern might contain wildcards, such as * (matches exactly one word) and # (matches zero or more words).
  - **Example of binding key patterns:**
    - animals.*.mammal — Matches any routing key that starts with animals., followed by any word, and ending with .mammal.
    - animals.# — Matches any routing key that starts with animals. followed by any number of words.
    - *.dog.* — Matches any routing key with .dog. as the second word.
- **Message:** The actual data being sent between the producer and consumer.

## Using RabbitMQ in Spring Boot Application

### Step 1: Add Dependencies

Add the necessary dependencies to your `pom.xml` (for Maven) or `build.gradle` (for Gradle).

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

### Step 2: Configure RabbitMQ in application.properties
Configure RabbitMQ connection details in the `application.properties` or `application.yml` file.

```properties
# RabbitMQ Configuration
spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.username=guest
spring.rabbitmq.password=guest
spring.rabbitmq.virtual-host=/
```
### Step 3: Create a Configuration Class for RabbitMQ
You can configure RabbitMQ using @Configuration in a separate class. This step involves declaring Queue, Exchange, and Binding.

```java
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    @Bean
    public Queue queue() {
        return new Queue("testQueue", true);
    }

    @Bean
    public TopicExchange exchange() {
        return new TopicExchange("testExchange");
    }

    @Bean
    public Binding binding(Queue queue, TopicExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with("routing.key.#");
    }
}
```

This configuration creates:

A queue named testQueue.
A topic exchange named testExchange.
A binding between the queue and exchange with a routing key.

### Step 4: Create a Producer (Sender) to Send Messages
Create a service that will send messages to RabbitMQ.

```java
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageProducer {

    @Autowired
    private AmqpTemplate amqpTemplate;

    @Autowired
    private TopicExchange exchange;

    public void sendMessage(String message) {
        amqpTemplate.convertAndSend(exchange.getName(), "routing.key.test", message);
        System.out.println("Sent: " + message);
    }
}
```
In this code, amqpTemplate.convertAndSend sends the message to the RabbitMQ exchange with the specified routing key.

### Step 5: Create a Consumer (Listener) to Receive Messages
Create a listener that listens for messages from RabbitMQ.

```java
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class MessageListener {

    @RabbitListener(queues = "testQueue")
    public void receiveMessage(String message) {
        System.out.println("Received: " + message);
    }
}
```
This listener listens on the testQueue and prints the received messages.

### Step 6: Test the Application
In your main application class or a test class, you can autowire the MessageProducer and send a message to RabbitMQ:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RabbitmqExampleApplication implements CommandLineRunner {

    @Autowired
    private MessageProducer messageProducer;

    public static void main(String[] args) {
        SpringApplication.run(RabbitmqExampleApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        messageProducer.sendMessage("Hello, RabbitMQ!");
    }
}
```

## Durability Features in RabbitMQ

- **Durable Queues**: Queues survive broker restarts.
```java
@Bean
public Queue queue() {
    return new Queue(QUEUE_NAME, true); // 'true' makes the queue durable
}
```
- **Persistent Messages**: Messages are saved to disk and not lost if the broker crashes.
```java
public void sendMessage(String message) {
    // Sending persistent message
    rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_NAME, RabbitMQConfig.ROUTING_KEY, message, messagePostProcessor -> {
        messagePostProcessor.getMessageProperties().setDeliveryMode(MessageDeliveryMode.PERSISTENT); // Makes the message persistent
        return messagePostProcessor;
    });
}
```
- **Acknowledgments**: Ensures messages are only removed once processed by the consumer.
  - By default, Spring AMQP automatically acknowledges messages once they have been processed by the consumer.
- **Publisher Confirms**: Confirms that the message has been successfully received by the broker.
```java
@Configuration
public class RabbitMQConfig {

    @Bean
    public ConnectionFactory connectionFactory() {
        CachingConnectionFactory connectionFactory = new CachingConnectionFactory("localhost");
        connectionFactory.setPublisherConfirms(true); // Enable publisher confirms
        return connectionFactory;
    }
}
```
- **Dead Letter Queues (DLQ)**: Stores messages that cannot be processed.
```java
@Bean
public Queue dlq() {
    return new Queue("deadLetterQueue", true); // Create DLQ
}

@Bean
public Binding dlqBinding() {
    return BindingBuilder.bind(dlq()).to(new DirectExchange("dlxExchange")).with("dlxRoutingKey");
}

@Bean
public Queue queue() {
    Map<String, Object> arguments = new HashMap<>();
    arguments.put("x-dead-letter-exchange", "dlxExchange");
    arguments.put("x-dead-letter-routing-key", "dlxRoutingKey");

    return new Queue("mainQueue", true, false, false, arguments);
}
```
- **High Availability Queues**: Ensures queues are available even in the event of a node failure.

**Example:** One DLQ for each queue

```java
@Configuration
public class RabbitMQConfig {

    @Bean
    public Queue queue1() {
        return QueueBuilder.durable("queue1")
            .withArgument("x-dead-letter-exchange", "DLX-exchange")
            .withArgument("x-dead-letter-routing-key", "queue1-dlq")
            .withArgument("x-message-ttl", 60000) // 1 minute TTL
            .build();
    }


    @Bean
    public Queue queue1DLQ() {
        return QueueBuilder.durable("queue1-dlq").build();
    }

    @Bean
    public Queue queue2() {
        return QueueBuilder.durable("queue2")
                .withArgument("x-dead-letter-exchange", "DLX-exchange")
                .withArgument("x-dead-letter-routing-key", "queue2-dlq")
                .build();
    }

    @Bean
    public Queue queue2DLQ() {
        return QueueBuilder.durable("queue2-dlq").build();
    }

    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange("DLX-exchange");
    }

    @Bean
    public Binding queue1Binding() {
        return BindingBuilder.bind(queue1()).to(directExchange()).with("queue1");
    }

    @Bean
    public Binding queue2Binding() {
        return BindingBuilder.bind(queue2()).to(directExchange()).with("queue2");
    }

    @Bean
    public Binding queue1DLQBinding() {
        return BindingBuilder.bind(queue1DLQ()).to(directExchange()).with("queue1-dlq");
    }

    @Bean
    public Binding queue2DLQBinding() {
        return BindingBuilder.bind(queue2DLQ()).to(directExchange()).with("queue2-dlq");
    }
}
```