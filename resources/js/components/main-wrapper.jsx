import React from 'react'
import Sidebar from './ui/sidebar'

function MainWrapper({ children }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="my-5">
                        <div className="row">
                            <Sidebar />
                            <div className="col-md-7">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWrapper
