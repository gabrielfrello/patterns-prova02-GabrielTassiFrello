class PaymentProcessor {
  processPayment(amount) {
    console.log(`Pagamento de R$${amount} processado.`);
  }
}

class ExternalPaymentService {
  makeTransaction(value) {
    console.log(`Transação realizada no valor de R$${value} com serviço externo.`);
  }
}

class ExternalPaymentAdapter extends PaymentProcessor {
  constructor(externalService) {
    super();
    this.externalService = externalService;
  }

  processPayment(amount) {
    this.externalService.makeTransaction(amount);
  }
}

function payOrder(processor, amount) {
  processor.processPayment(amount);
}

const internalProcessor = new PaymentProcessor();
payOrder(internalProcessor, 100);

const externalService = new ExternalPaymentService();
const adapted = new ExternalPaymentAdapter(externalService);
payOrder(adapted, 200);