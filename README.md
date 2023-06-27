# typescript-design-patterns
 Commonly Used Design Patterns in Typescript

---
marp: true
---
##  Factory Pattern 

> **ChatGPT explanation** : Let's say you love eating pizza, but you don't know how to make it.   
> 
>In the Factory Pattern, the pizza restaurant is the factory that knows how to make pizzas.  
>
>Just like how the pizza restaurant can make different types of pizzas, the factory in the Factory Pattern can make different types of objects.  
>
>When you want a pizza, you ask the pizza restaurant to make it for you. The pizza restaurant makes the pizza and gives it to you.
>
>That is an example of the Factory Pattern in Action ! It's like a pizza restaurant that makes pizzas for you.


--- 
## Decorator Pattern


> This pattern is used to add extra features to an existing class .

>Imagine you have a toy car that you really like, but you want to make it more exciting by adding some cool features like flashing lights, a siren sound, and extra speed. 

>Instead of changing the original car itself or creating a completely new car, you can use the decorator pattern to add these features without modifying the original toy car.

> In the decorator pattern, you create separate objects, called decorators, that wrap around the original object (in this case, the toy car) and provide additional functionalities. Each decorator adds a specific feature to the toy car, such as lights, sound, or speed. These decorators can be added or removed as needed, allowing you to customize the toy car based on your preferences.

> The decorator pattern works by having all decorators implement the same interface as the original object. This ensures that the decorators have the same methods and can be used interchangeably. When you want to add a feature, you wrap the original object with a decorator that provides that feature. The decorator then adds its functionality while still allowing the original object to work as it did before.

> For example, if you want to add flashing lights to your toy car, you can create a "FlashingLightsDecorator" that wraps around the toy car. When someone plays with the toy car, the decorator adds the flashing lights effect to make it more fun. If you decide later that you don't want the flashing lights anymore, you can simply remove the decorator, and the toy car will go back to its original state.

> The decorator pattern is a way to enhance or modify the behavior of an object without changing its core functionality. It allows you to add or remove features dynamically, making it flexible and reusable.

---