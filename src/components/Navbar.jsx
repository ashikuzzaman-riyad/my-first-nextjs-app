import Link from "next/link";

export default function Navbar (){
    return <div>
        <div className="container mx-auto flex justify-between p-5">
            <div>
                <h2>logo</h2>
            </div>
            <div>
        <nav className="space-x-5">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/product'>Product</Link>
            <Link href='/addproduct'>Add Product</Link>
            <Link href='/manageproduct'>Manage Products</Link>
        </nav>
            </div>
            <div className="space-x-5">
                <Link href='/login'>Login</Link>
                <Link href='register'>Signup</Link>
            </div>
        </div>
        
    </div>
}