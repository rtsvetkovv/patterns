class Complaints {
  constructor() {
    this.complaints = [];
  }

  replay(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.replay(complaint);
  }
}

class ProductComplaints extends Complaints {
  replay({ id, customer, details }) {
    return `Product: ${id}/${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  replay({ id, customer, details }) {
    return `Service: ${id}/${customer} (${details})`;
  }
}

// Facade
class ComplaintsRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;
    if (type === 'service') {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({
      id,
      customer,
      details,
    });
  }
}

const registry = new ComplaintsRegistry();
console.log(registry.register('Roman', 'service', 'Недоступен'));
console.log(registry.register('Elena', 'product', 'Ошибка'));
