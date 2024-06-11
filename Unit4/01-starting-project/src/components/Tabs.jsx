// This is to show how you can create multiple "Slots" in a component.
export default function Tabs({ children, buttons }) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    )
}