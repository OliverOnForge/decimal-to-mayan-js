

<img src="doc/assets/head.svg" alt="a decimal number converting to the Mayan system" width="400">

# Decimal to Mayan Numeral Converter

A lightweight **JavaScript** script that transforms decimal numbers (base 10) into the **vigesimal (base 20)** system used by the Mayan civilization, using a simple text symbols.

## Description

This program decomposes any positive integer into its corresponding vigesimal levels and translates them into a string of characters representing traditional dots and bars. 

## Symbology Used

For this implementation, the following characters represent the Mayan glyphs:

- **o** Represents the shell or zero mayan (0).
- **.** One dot (1).
- **:** Two dots (2).
- **.:** Three dots (3).
- **::** Four dots (4).
- **|** A vertically bar (5).
- **/** Level separator (powers of 20).

---

## Conversion Example

**Decimal Number:** `532`

**Convertion Logic:**
1.  532 / 400 = 1 (Remainder: 132) -> .
2.  132 / 20 = 6 (Remainder: 12) -> .|
3.  12 / 5 = 2 (Remainder: 2) -> :||

**Final Result:** `[ ./.|/:|| ]`

---

## How to Use

This script is designed to run directly in the **browser console** or a **Node.js** environment.

1.  Copy the code from the `index.js` file.
2.  Open your browser's developer tools (F12).
3.  Paste the code into the **Console** tab and press `Enter`.
4.  Enter the decimal number when the prompt appears.

---

### Author
* **OliverOnForge** - [Github](https://github.com/OliverOnForge/)

> **Note:** This program only accepts positive integers. If a negative number is entered, it will be processed as an absolute value.
