package factoryPattern;

import java.util.Scanner;

class Application {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		
		double amount = 0;
		System.out.println("Welcome to online train ticket booking");
		System.out.println("======================================");
		System.out.println("Enter 1 for First Class");
		System.out.println("Enter 2 for Second Class");
		System.out.println("Enter 3 for Third Class");
		System.out.println("``````````````````````````````````````");
		System.out.print("Enter the number for class type you want :");
		int type = s.nextInt();
		
		System.out.print("Enter the number of seats you want :");
		double seat = s.nextInt();
		
		switch (type) {
		case 1: 
			System.out.println("First Class selected");
			Ticket ticket1 = TicketFairFactory.ticketType("FIRST_CLASS");
			ticket1.setTicketFair();
			amount = seat*ticket1.ticketFair;
			break;
		case 2: 
			System.out.println("Second Class selected");
			Ticket ticket2 = TicketFairFactory.ticketType("SECOND_CLASS");
			ticket2.setTicketFair();
			amount = seat*ticket2.ticketFair;
			break;
		case 3:
			System.out.println("Third Class selected");
			Ticket ticket3 = TicketFairFactory.ticketType("THIRD_CLASS");
			ticket3.setTicketFair();
			amount = seat*ticket3.ticketFair;
			break;
		default:
			System.out.println("Enter the proper class type");
		}
		
		System.out.println("Total amount is :"+amount);
		
		
	}
}
