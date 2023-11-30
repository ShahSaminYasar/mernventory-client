const Container = ({ children, className }) => {
    return (
        <div className={`block w-full max-w-screen-xl mx-auto ${className && className}`}>
            {children}
        </div>
    );
};
export default Container;