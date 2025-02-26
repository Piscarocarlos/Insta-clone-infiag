import React from 'react'

function Security() {
    return (
        <div className="row">
            <div className="col-md-6">
                {/* form update password */}
            </div>
            <div className="col-md-6">
                {/* MFA */}
                <div className="card card-body">
                    <h6>Sécurité avancée de votre compte</h6>

                    <form action="">
                        <div className="form-group">
                            <div class="form-check form-switch">
                                <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Activer la double authentification</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Activation avec Google
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Activation avec Empreinte
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Security
