class Notifier {
  send(message) {
    console.log("Notificação padrão:", message);
  }
}

class NotifierDecorator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  send(message) {
    this.notifier.send(message);
  }
}

class EmailNotifier extends NotifierDecorator {
  send(message) {
    super.send(message);
    console.log("Enviando e-mail:", message);
  }
}

class SMSNotifier extends NotifierDecorator {
  send(message) {
    super.send(message);
    console.log("Enviando SMS:", message);
  }
}

const notifier = new SMSNotifier(new EmailNotifier(new Notifier()));
notifier.send("Sistema atualizado com sucesso!");