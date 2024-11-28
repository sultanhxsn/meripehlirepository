#include <stdio.h>

int main() {
    char name[50];
    int age;
    float weight;

    // Prompt for user's name
    printf("Enter your name: ");
    scanf("%s", name);

    // Prompt for user's age
    printf("Enter your age: ");
    scanf("%d", &age);

    // Prompt for user's weight
    printf("Enter your weight: ");
    scanf("%f", &weight);

    // Print the greeting
    printf("Hello %s! You are %d years old and weigh %.2f kg.\n", name, age, weight);

    return 0;
}
