abstract class Animal{
    public abstract void sound();

    public void sleep(){
        System.out.println("This animal is sleeping");
    }
}
// dog class extends animal
 class Dog extends Animal{

    //override
    public void sound(){
        System.out.println("The dog barks.");
    }

 } 
 class Cat extends Animal{
    //override
    public void sound(){
        System.out.println("The cat meows.");
    }
}

public class Main{
    
    //method to demonstrate polymorphism
    public static void animalSound(Animal animal ){
        animal.sound();
    }
    
public static void main(String[] args){

    Animal myDog= new Dog();
    Animal myCat= new Cat();

    myDog.sound();
    myCat.sound();

    myDog.sleep();
    myCat.sleep();

}
}