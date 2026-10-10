# Linde

Hogar compartido. Cada teléfono arma su protección, lee movimiento y lugar, y avisa a la central si nadie cancela la cuenta regresiva.

## Servidor

```bash
cd server
npm install
npm start
```

Queda en `http://localhost:4000`.

## App

```bash
cd mobile
npm install
npx expo start
```

Abre el proyecto en Expo Go, o en el navegador con `npx expo start --web`. En un teléfono físico, el servidor tiene que estar encendido en la misma red. Si no conecta, en Entrar abre Servidor y pon la IP de tu computadora, por ejemplo `http://192.168.1.20:4000`.

## Cómo se prueba

1. Crea una cuenta y abre el hogar. Esa persona es la central.
2. En otro teléfono, crea otra cuenta y entra con el código.
3. Arma la protección con la huella. Si el emulador no tiene biometría, puedes confirmar igual.
4. El anillo muestra acelerómetro, giroscopio, proximidad, luz y ubicación.
5. Probar una alerta abre 15 segundos. Si no la cancelas, el micrófono graba y la central recibe el aviso.
6. El plan Nube se activa con la tarjeta de prueba `4242 4242 4242 4242`. No hay cargo real.
