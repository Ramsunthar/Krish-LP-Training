import java.util.Scanner;
public class ItsMeTom {

	public static void main (String[] args) {
		Scanner s = new Scanner(System.in);
		int distance = 0;
		int time = 0;
		int target = 0;
		int hop = 0;
		System.out.print("Enter the distance in m : ");
		target = s.nextInt();
		
		while(distance<target) {
			hop++;
			distance+=5;
			if(distance>=target) {
				
				break;	
			}
			time+=1;
			hop++;
			distance+=3;
			if(distance>=target) {
			
				break;	
			}
			time+=2;
			hop++;
			distance+=1;
			if(distance>=target) {
				break;	
			}
			time+=5;			
		}
		System.out.println("Number of hops : " + hop);
		System.out.println("Time taken : " + time + " seconds");
	}
}