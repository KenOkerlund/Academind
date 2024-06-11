// This is to show how you can create multiple "Slots" in a component.
export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    //const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}