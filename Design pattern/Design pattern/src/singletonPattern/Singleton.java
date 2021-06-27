package singletonPattern;
//Early Initialization

public class Singleton {

	private static volatile Singleton instance = new Singleton();

	private Singleton() {
	}

	public static Singleton getInstance() {
		return instance;
	}
}

////Lazy Initialization (Not thread safe)
//public class Singleton {
//
//	private static volatile Singleton instance = null;
//
//	private Singleton() {
//	}
//
//	public static Singleton getInstance() {
//		if (instance == null) {
//			instance = new Singleton();
//		}
//		return instance;
//	}
//}
//
////Lazy Initialization (Thread safe)
//public class Singleton {
//
//	private static volatile Singleton instance = null;
//
//	private Singleton() {
//	}
//
//	public static Singleton getInstance() {
//		if (instance == null) {
//			synchronized (Singleton.class) {
//				if (instance == null) {
//					instance = new Singleton();
//				}
//			}
//		}
//		return instance;
//	}
//}
