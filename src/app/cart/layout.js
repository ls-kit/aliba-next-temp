import PrivateRoute from "@/helpers/PrivateRoute";


export default function CartLayout({ children }) {
    console.log(children)
    return (
        <section>
            <PrivateRoute>

            {children}
            </PrivateRoute>
        </section>
    );
}
