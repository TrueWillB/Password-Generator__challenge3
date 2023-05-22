# Password Generator Starter Code

## Purpose

This is a simple password generator, written as a first introduction to the use of javascript. The user will enter a password length and what types of characters to include in the password, and then a password will be randomly generated. It should be noted that this password that is generated is not necessarily cryptographically secure, as it uses the Math.random method to generate the randomized letters. The ideal circumstance would be to use the Crypto.getRandomValues to generate more secure randomly generated passwords. PLEASE USE THIS GENERATOR AT YOUR OWN RISK.

## Notes

- I added a feature that checks to make sure that at least 1 character of each type that the user specified is included in the generated password.
- This generator includes all the standard special characters. Frequently, websites forbid some of the characters that this code includes. However, changing the characters that it includes is a simple matter, so I figured I'd err on the inclusive side
- I found that js prompts are not great for input sanitization. A better method would probably be to have HTML elements that take the input, but, for the sake of the exercise, I stayed with the prompts
- Rather than prompt the user over and over again, I decided to just let them enter all the criteria at once by just typing the first letter of the type of characters that they wanted. It is not case-sensitive, and any characters other than the ones specified are simply stripped out
- The website layout was given to us via starter code, which can be found here: https://github.com/coding-boot-camp/friendly-parakeet
- I hope you enjoy playing with it!
