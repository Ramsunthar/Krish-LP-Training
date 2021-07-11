package factoryPattern;

public abstract class Ticket {

	double ticketFair;	
	public abstract void setTicketFair();
	
//	int passengerCount;
//	public abstract void setPassengerCount();
	
	private TicketType type = null;
	
	public Ticket(TicketType type) {
		this.type = type;
		
	}
	
//	public abstract void printTicket();
}
