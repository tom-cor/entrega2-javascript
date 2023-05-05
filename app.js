const devices = document.querySelector("#connected-devices-list")

let knownDevices =[
    new Device("Vintage Filamento Globo", "Calida", "E27", 7, "Cocina"),
    new Device("Vintage Filamento Globo", "Calida", "E27", 7, "Cocina"),
    new Device("Vintage Filamento Globo", "Calida", "E27", 7, "Cocina"),
    new Device("Vintage Filamento", "Neutro", "E27", 7, "Baño"),
    new Device("Vintage Filamento", "Neutro", "E27", 7, "Baño"),
    new Device("Go", "RGB", "No", 12, "Living"),
    new Device("Play", "RGB", "No", 24, "Living")
]

while("no" != prompt("Deseas ingresar un nuevo dispositivo?(si/no)"))
{
    room = prompt("En qué habitación instalaras el artefacto?")
    nombre = prompt("Ingresa nombre del dispositivo")
    color = prompt("De qué color es? (pone RGB en caso de serlo)")
    socket = prompt("En caso de contar con ello, indica el zocalo de la lampara")
    power = prompt("En caso de contar con ello, indica la potencia de la lampara")
    knownDevices.push(new Device(nombre, color, socket, Number(power), room))
}

knownDevices.forEach(device => {
    let container = document.createElement("div")
    container.className = "col-xl-3 col-lg-4 col-md-6"
    container.innerHTML =
        `
    
        <div class="card border-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">${device.name}</div>
        <div class="card-body">
            <p class="card-text">Habitación: ${device.room}</p>
            <p class="card-text">Color: ${device.color}</p>
            <p class="card-text">Zócalo: ${device.socket}</p>
            <p class="card-text">Potencia: ${device.power} Watts</p>
                <button type="button" class="btn btn-dark">Agregar uno igual</button>
            </div>
        </div>
    
        `
    devices.appendChild(container)
});

const rgbQuantity = knownDevices.filter(device => String(device.color).toLowerCase() == "rgb").length
console.log(`Hay ${rgbQuantity} dispositivos RGB `)
const countKitchen = knownDevices.filter(device => device.room == "Cocina")
console.log(`Hay ${countKitchen} artefactos en la cocina`)

function calculateAvgPower()
{
    let power = 0;
    knownDevices.forEach(device => {
        power += Number(device.power)
    });

    return power/knownDevices.length
}
power = calculateAvgPower()

console.log(`La potencia promedio es de ${power} Watts`)