
![Un numero decimal pasando a simbología maya](assets/head.svg)

# Conversor de Decimal a Maya

Un script ligero de JavaScript que transforma números decimales (base 10) al sistema Maya vigesimal (base 20), a apartir de símbolos de texto simples.

## Descripción

Este programa descompone cualquier número entero positivo en sus niveles vigesimales correspondientes y los traduce a una cadena de caracteres que representan los puntos y barras tradicionales.

## Simbología Utilizada

Para esta implementación, los siguientes caracteres representan los glifos mayas:

- o Representa el caracol o cero maya (0).
- . Un punto (1).
- : Dos puntos (2).
- .: Tres puntos (3).
- :: Cuatro puntos (4).
- | Una barra vertical (5).
- / Separador de nivel (para potencias de 20).

Ejemplo de Conversión

Número Decimal: 532

Lógica de Conversión:

    532 / 400 = 1 (Residuo: 132) -> .

    132 / 20 = 6 (Residuo: 12) -> .|

    12 / 5 = 2 (Residuo: 2) -> :||

Resultado Final: [ ./.|/:|| ]
Cómo usarlo

Este script está diseñado para ejecutarse directamente en la consola del navegador.

    ejecuta o abre el archivo 

    Abre las herramientas para desarrolladores de tu navegador (F12).

    Ingresa el número decimal cuando aparezca el mensaje.

Autor

    OliverOnForge - Github

    Nota: Este programa solo acepta números enteros positivos. Si se ingresa un número negativo, se procesará como su valor absoluto.
