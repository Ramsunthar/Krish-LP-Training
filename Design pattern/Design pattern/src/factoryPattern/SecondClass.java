package factoryPattern;



public class SecondClass extends Ticket {
	


	SecondClass() {
		super(TicketType.SECOND_CLASS);
	}

	public void setTicketFair() {
		ticketFair = 700;
		
	}
	
}
