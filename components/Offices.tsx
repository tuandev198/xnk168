import clsx from "clsx";

function Office({ name, children, invert = false }) {
    return (
        <address
            className={clsx(
                "text-sm not-italic",
                invert ? "text-neutral-300" : "text-neutral-600"
            )}
        >
            <strong className={invert ? "text-white" : "text-neutral-950"}>
                {name}
            </strong>
            <br />
            {children}
        </address>
    );
}

const Offices = ({ invert = false, ...props }) => {
    return (
        <ul role="list" {...props}>
            <li>
                <Office name="V.N" invert={invert}>
                    7A Vo Van Bich Street
                    <br />
                    Binh My Ward, Cu Chi District
                </Office>
            </li>
            <li>
                <Office name="U.S.A" invert={invert}>
                    Ho Chi Minh City
                    <br />
                    Vietnam
                </Office>
            </li>
        </ul>
    );
};

export default Offices;
