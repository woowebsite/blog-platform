import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa";

export default function Pagination() {
    return (
        <div className="rn-pagination text-center">
            <ul className="page-list">
                <li className="active"><Link href="#">1</Link></li>
                <li><Link href="#">2</Link></li>
                <li><Link href="#">3</Link></li>
                <li><Link href="#">4</Link></li>
                <li><Link href="#"><FaAngleRight /></Link></li>
            </ul>
        </div>
    )
}