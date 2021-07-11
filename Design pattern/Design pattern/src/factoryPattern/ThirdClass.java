package factoryPattern;

import java.util.Scanner;

public class ThirdClass extends Ticket{
	
	Scanner s = new Scanner(System.in);
	
	public ThirdClass() {
		super(TicketType.THIRD_CLASS);
	}

	public void setTicketFair() {
		ticketFair = 320;
	}
	
//	public void setPassengerCount() {
//		System.out.print("Enter the passenger count for 3rd class seat :");
//		passengerCount = s.nextInt();
//	}
//	
//	public void printTicket() {
//		System.out.println("Total price for 3rd class tickets :"+ticketFair*passengerCount);
//	}
}
