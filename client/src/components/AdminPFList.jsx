import { useEffect } from 'react';
import { EcommerceAccountOrdersView } from 'src/sections/_e-commerce/view';

export default function AdminPFList(props) {

    return(
        <>
        { props.adminStatus === true ? (<EcommerceAccountOrdersView/>) : (null) }
        </>
    )
}