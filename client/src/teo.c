#include <stdio.h>
int sumDigits(int a)
{
    if (a > 9)
    {
        return a % 10 + sumDigits((a - a % 10) / 10);
    }
    return a;
}
int main(int argc, char const *argv[])
{
    printf("%d", sumDigits(103));
    return 0;
}
