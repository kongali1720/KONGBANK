class KafkaProducer {
  send(topic, message) {
    console.log("📡 Kafka SEND:", topic, JSON.stringify(message));
  }
}

module.exports = new KafkaProducer();
