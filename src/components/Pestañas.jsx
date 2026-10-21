import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Pestañas() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="home" title="Historia">
                <p >Todo comenzó con un debate interminable entre amigos: <i>¿Cuál ha sido el mejor juego de la historia?</i> Nos dimos cuenta de lo difícil que era encontrar, en un solo lugar, una plataforma que reuniera exclusivamente a los ganadores del máximo galardón del gaming, garantizando códigos oficiales y entrega inmediata.
                    Así nació la idea de crear un espacio puro, sin el ruido de lanzamientos genéricos. Queríamos un mercado exclusivo para los "Juegos del Año", diseñado por gamers y para gamers. Lo que empezó como un proyecto de dos amigos se convirtió en Goty's Market. ¡Sé parte de esta pequeña comunidad gamer!</p>
            </Tab>
            <Tab eventKey="profile" title="Nuestro Servicio" >
                <h3>¿Porque elegirnos?</h3>
                <ul>
                    <li><b>Entrega Instantánea:</b> Olvídate de esperar al cartero. Al completar tu compra, recibes el código de activación en tu correo y en tu perfil en menos de 2 minutos.</li>
                    <li><b>Licencias 100% Originales:</b> Trabajamos directamente con distribuidores autorizados y editores. Cada clave es única, permanente y se vincula directamente a tu cuenta personal (Steam, PlayStation Network, Xbox Live, Epic Games o Nintendo eShop).</li>
                    <li><b>Soporte de Gamer a Gamer:</b> Si tienes dudas sobre cómo canjear tu código o problemas de compatibilidad con tu PC, nuestro equipo técnico te atenderá de inmediato a través de nuestro chat en vivo.</li>
                </ul>
            </Tab>
            <Tab eventKey="longer-tab" title="Seguridad">
                <h3>Para tu total tranquilidad, operamos bajo los más estrictos estándares del comercio electrónico:</h3>
                <ul>
                    <li><b>Garantía de Activación:</b> Nos aseguramos de que cada clave digital funcione de inmediato. En el remoto caso de que un código presente un error de región o de servidor, nuestro sistema lo reemplaza de forma automática tras verificarlo con soporte.</li>
                    <li><b>Política de Reembolso Digital:</b> Cumpliendo con la normativa de bienes digitales, si compraste un juego por error y no has visualizado ni canjeado la clave de activación, puedes solicitar la devolución íntegra de tu dinero dentro de los primeros 14 días.</li>
                    <li><b>Transacciones 100% Cifradas:</b> Tu seguridad es nuestra prioridad. No almacenamos tus datos bancarios; todas las compras se procesan de forma segura a través de pasarelas cifradas SSL con PayPal, Stripe y las principales tarjetas de crédito/débito.</li>
                </ul>
            </Tab>
        </Tabs>
    );
}

export default Pestañas;