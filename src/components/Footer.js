import React from 'react'
import "../CSS/layout.css"
function Footer() {
    return (
        <footer>
            <div className="banner-footer d-flex" style={{ backgroundColor: "#363636" }}>
                <div className="info" style={{ padding: "3rem 6rem" }}>
                    <h6
                        style={{
                            color: "#ffffff",
                            fontFamily: '"Gotham-Medium"',
                            fontSize: "1.2rem",
                            textDecoration: "underline",
                            marginBottom: "1rem"
                        }}
                    >
                        THÔNG TIN CHUNG
                    </h6>
                    <h4
                        style={{
                            color: "#ffffff",
                            fontFamily: '"Gotham-Medium"',
                            fontSize: "1.5rem",
                            marginBottom: "2rem"
                        }}
                    >
                        CÔNG TY TNHH GTL
                    </h4>
                    <div className="phone">
                        <i className="fa-solid fa-phone " style={{ color: "#d6d6d6" }} />
                        <span
                            style={{
                                color: "#d6d6d6",
                                fontFamily: '"Gotham-Medium"',
                                marginLeft: "1rem"
                            }}
                        >
                            0999.999.999
                        </span>
                    </div>
                    <div className="mail">
                        <i className="fa-regular fa-envelope " style={{ color: "#d6d6d6" }} />
                        <span
                            style={{
                                color: "#d6d6d6",
                                fontFamily: '"Gotham-Medium"',
                                marginLeft: "1rem"
                            }}
                        >
                            gtl@gmail.com
                        </span>
                    </div>
                    <div className="address">
                        <i className="fa-solid fa-location-dot" style={{ color: "#d6d6d6" }} />
                        <span
                            style={{
                                color: "#d6d6d6",
                                fontFamily: '"Gotham-Medium"',
                                marginLeft: "1rem"
                            }}
                        >
                            Số 10, Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội
                        </span>
                    </div>
                </div>
                <div className="" style={{ paddingTop: "3rem", paddingLeft: "4rem" }}>
                    <h6
                        style={{
                            color: "#ffffff",
                            fontFamily: '"Gotham-Medium"',
                            fontSize: "1.2rem",
                            textDecoration: "underline",
                            marginBottom: "1rem",
                            width: "10rem"
                        }}
                    >
                        VỀ CHÚNG TÔI
                    </h6>
                    <a
                        href="#"
                        style={{
                            color: "#d6d6d6",
                            fontFamily: '"Gotham-Medium"',
                            textDecoration: "none"
                        }}
                    >
                        GIỚI THIỆU
                    </a>
                    <br />
                    <a
                        href="#"
                        style={{
                            color: "#d6d6d6",
                            fontFamily: '"Gotham-Medium"',
                            textDecoration: "none"
                        }}
                    >
                        SẢN PHẨM
                    </a>
                    <br />
                    <a
                        href="#"
                        style={{
                            color: "#d6d6d6",
                            fontFamily: '"Gotham-Medium"',
                            textDecoration: "none"
                        }}
                    >
                        TIN TỨC
                    </a>
                </div>
                <div className="" style={{ paddingTop: "3rem", paddingLeft: "12rem" }}>
                    <h6
                        style={{
                            color: "#ffffff",
                            fontFamily: '"Gotham-Medium"',
                            fontSize: "1.2rem",
                            textDecoration: "underline",
                            marginBottom: "1rem",
                            width: "20rem"
                        }}
                    >
                        KẾT NỐI VỚI CHÚNG TÔI
                    </h6>
                    <a
                        href="#"
                        style={{
                            color: "#d6d6d6",
                            fontFamily: '"Gotham-Medium"',
                            textDecoration: "none"
                        }}
                    >
                        <i
                            className="fa-brands fa-square-facebook"
                            style={{ fontSize: "2rem" }}
                        />
                    </a>
                    <a
                        href="#"
                        style={{
                            color: "#d6d6d6",
                            fontFamily: '"Gotham-Medium"',
                            textDecoration: "none",
                            marginLeft: "1rem"
                        }}
                    >
                        <i className="fa-solid fa-envelope" style={{ fontSize: "2rem" }} />
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer