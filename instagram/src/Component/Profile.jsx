import React from "react";
import { useState } from "react";
import './Instagram.css';
import Sidebar from "./Sidebar";
function Profile() {
    return (
        <div>
            <Sidebar />


            <div id="homePage">

                <div id="profileinfo">

                    <div id="profileimg">
                        <center>
                            <img id="pic" src="https://lh3.googleusercontent.com/pw/AMWts8Dx0JBnCsTFEdXbqcZHcjsN2KBYNQyyVNnDuAVY5T-IH5XjYt5RC23BD7sZ3yaTWXDfxisM2lJEkBwLfNyD039VJnXf7zk57YSLOsPEbMJkGt7fHuQuHTqvrQiSX2gikJHz1ghSzEFscFft0dXlRrvUtibU4hF40H37yafqP7PoY8Q-JwKqVNSDKHG9RBgVnNzL0ZLv8pP6qiqC-Kjg1VCx4094StZ7X14RWg80R1AbgGExY5y036JwIM_aL3H5A4syahgZQY-wEzQNZYad0RXI0g09bzSVpjGL9tHflHDAiJLRcQSXT5FyU9WsarNnZ4SKXQ_9fd8Mj7t9RnP6cDNTXTaOoKBFrnRTP3oSou4QtBmAPSD6ByYvwaFqjkR69RmKLlScg0fc2K6VLWSlrSDtzDPSgdnBcF0IVFYSESbcthK87bLgCXAuthmR8ujYXZJi_TUuv_uMapxgE8-v0IwAu71Ag3A9t5frfUrPqgsGI0sxSjtJ-DeaBJExKY0LKw_dOI5pwZnjE7zN3TGl05g31qlUi86I8DvYdNuBkrthfEvZtbEy7PDPSTqg0xOb5MtCDIZqXdD3xsrTLqy5AQGa59wOr-4VPh4CW6EjmciZGYeYheGajUhY-CI6fJzhur8wNMjY7SocD-_pAwJ7hH4cxdipeIhxR2kJVv4mfawsNo012Sfd0tr6Usgwsn-GK4vyD3qUW_tos2xtdHTIkybU5q0mQk0Vh1StCROlurmt2sC9Zf1RhA5f6GU_TRdb4R5NNcFgQPgJFmNr-j-iWyqLDSN5-2rnqe5Lk8n2gMhqmyPbLethfdR1vYwDIKPX-71yRJ2FOgMf1RpyOTqTC83whFlahU2k1VRAuK_qu6D925depTF4jLdDfdenZzFxyH4oAWN_TQileucfjKcdAg=w500-h625-no?authuser=0" alt="" />
                        </center>
                    </div>
                    <div id="profilename">
                        <div id="infodiv">
                            <span>tf.amaaannnn</span>
                            <button id="edit">Edit Profile</button>
                            <button className="edit">Add tools</button>
                            <i class="fa-solid fa-gear"></i>
                        </div>
                        <div id="div2">
                            <div>2 posts</div>
                            <div>5,057 followers</div>
                            <div>0 following</div>
                        </div>
                        <div className="bio">
                            <p>3 🦋❤️</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p>. 🛹</p>
                        </div>
                        <div className="highlight">
                            <div className="border-pic">
                                <img src="https://lh3.googleusercontent.com/pw/AMWts8DJle9UtWbUmIDqzcfMBR7xlko826ctMgce0ADkCHN0Bg3YLTvFQiTounSHk-rIH_gbd5QoHO08UlMjG91aLTcWX7o9NWTqyJGp-m6HZvjjGK1yrpW2ufIQZaDoGpCmfalsZ4Y2VuoYbl1kWlEbMOp-qI254UYBWh6T6B0KLDSPNu5AM1Lj-y4xR5QtPq65zXdIAMimmpL62wEJ9Xy8LkdfA3oViLprPsQ0LyHl4_57CvgN8nZjBTuK75S_im7Hir66vOet1aHQd0y12UgRgcZIvY-40YRP7wj_VltgNEuk4oqVwr-v40uiU0Jl1LNig-6sAGL3Pi8-XTFbaE30pTdELqgI-ILWl_CtIJXguQI_2V0Mk1ACCQ4nxJAeS4AY-Ygn8gHLs60IxnmLS-dyGPJeqxd3IKJDHeMJQ45N2pxQw98k_bc1BCmqdHcUewC-V3NoZ8F5Ck5fvrBStHm4yGk0BqcIMFddRnny4tKqMTipaEqVVE2ituQ5O2s6lwnTbpQIbZO1jA49mcc_PylLDv1hF9qPkUqOhPfg2ocjzhMA4foz6KQmpQmq3Eb4OL7umMyiAb3BFUcNLR2eOP9o3x-rh1Ug6gyr7LhPx8nrkwQx67YOmn-KpPDUy3PDCsEsQa8GmIltVPcTgSmQrRSt1lWGdWsCrP-ycqdAoXIS6SFA1T1GW_0jXl1n07_4sFCQaFw_hlyEX9jmZDIKVB4uQrReYpEflVJqbrlHGgL160AJAkMGcLXaFCOBDZEMOYphmsg9eDd6Qgtmx8upsB4qcgzGt_xcC5NciZ6Jk6FdkPjPzd6mA915etOH4EAYHXAe9Nudhi5nZGNDhlR--1BYzQt6P4tRJrD411J2_A_obMdpfL89OkChNaauG7vkCaubCs8yabW6QdvWcXDwHkcc9w=w352-h625-no?authuser=0" alt="" />
                            </div>
                            <div className="border-pic1">
                                <img src="https://lh3.googleusercontent.com/pw/AMWts8CSPINH7AJ-9W6DS3fFU3YOF1AcgnH-HXzjssly80R8cZnh64IIyY8XzaPvBk_UBRZG2-bVNSuq9izie_QATJ4Bm1k61LeI1pmQ7lywKJooVhGHygFNOIiq1tdhshTPG1z7E7JL2GGEb1PvOn_km0g1mYp_WfVluwT0qvbWy4L7MTdgFTJWPT3JaLZ8ryfucjQa_ZFMEQDCUOZJqdcGE3alX8vhH68D815SNvX9mu_pqZQaswI1WpEHEOCrLZIhjfDWcWNYDFH5jq_nxQsXpsZm5G5mxB-PfMwq1PSl303uMdUXhDbmOBurb6MG-0CCFpVTJDUc6EiMtWKwvcSGRa5LA32p44PU0GdHBDaVaxo-fSRVNUyoJOSxLpsTEZKdvYaAgTlog-l88tj8_z53fplY7gbrJWT6rSVxRo-PK3GmJiNTpSO7_bIAF_dPFSDTy2aVwgkSr3kaO0B3Q0DPjOw3EaN5FlEIisUpmYL_Rh5a4uz_91LBRU2VE7z9OUqeR4_lt8JsC7CrbZ-aMUf48irGu823uwbb7r3KaplKLVIPWVhLrr7b0nPDftbNsjN7K1_uZyBZHuKwBgxNrGpuHRY3Sd0PxpH8gjS20PUWcqrUhKa2oAoOoMbxInW1FtQMSPWYjUBb9ulscH1_ISr6fN2S1LSOvlMK1zV1B9XrTseI3OgufT_Coo4o4_UGQ11ziRoZ8gO46iBwEnGpv5NykAiEnDo4GJosS02JS82mFJW5x_woGP0Zi-A6ulRia8xzQefWoqnNbr6y0RxXKulE0uIeT8j4iC6thzHyCLZvyHFHuWG_vwRA52guMNgPRbxTuspa85Yf_D2cV26Ffqge3XBb0UvTyjeuOhhdeSWeRqZdvTDW5WDoMu1IHigfInhEDLGzF1B842FNKANiN3HZIQ=s625-no?authuser=0" alt="" />
                            </div>

                            <div className="border-pic1">
                                <img src="https://portugal.postsen.com/content/uploads/2022/07/19/aef2aab2c5.jpg" alt="" />
                            </div>
                            <div className="border-pic1">
                                <img src="https://onetwostream.com/blog/wp-content/uploads/2021/08/insta.jpg" alt="" />
                            </div>


                        </div>
                        <div className="bottom">
                            <div className="bottom1">
                                <h5>formal</h5>
                            </div>
                            <div className="bottom2">
                                <h5>My shop</h5>
                            </div>
                            <div className="bottom3">
                                <h5>Instagram</h5>
                            </div>
                            <div className="bottom4">
                                <h5>insta</h5>
                            </div>
                        </div>
                        <div className="tags">
                            <div className="tags1">
                                <i class="fa-solid fa-camera-retro"></i>
                                <h4>POST</h4>
                            </div>
                            <div className="tags2">
                                <i class="fa-solid fa-camera-retro"></i>
                                <h4>REELS</h4>
                            </div>
                            <div className="tags3">
                                <i class="fa-solid fa-location-arrow"></i>
                                <h4>TAGS</h4>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}
export default Profile;