// app/layout.js
import '/public/styles/styles.css'; // or wherever your global styles are

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
