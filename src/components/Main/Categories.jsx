import React from 'react'

function Categories() {

    const data = ['Cuerdas', 'Vientos', 'Teclados', 'Accesorios', 'Discos', 'Percusión']

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                    {
                        data.map(item =>
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            {item}
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
