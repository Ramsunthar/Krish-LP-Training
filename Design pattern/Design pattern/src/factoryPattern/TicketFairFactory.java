package factoryPattern;

public class TicketFairFactory {

	public static Ticket ticketType(String TicketType) {
		if(TicketType == null) {
			return null;
		}
		if(TicketType.equalsIgnoreCase("FIRST_CLASS")) {
			return new FirstClass();
		}
		else if(TicketType.equalsIgnoreCase("SECOND_CLASS")) {
			return new SecondClass();
		}
		else if(TicketType.equalsIgnoreCase("THIRD_CLASS")) {
			return new ThirdClass();
		}
		return null;
	}
}
