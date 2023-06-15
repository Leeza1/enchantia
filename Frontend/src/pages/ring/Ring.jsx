import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addRingApi, deleteRingApi, getAllRingsApi } from '../../apis/Api'
import { Link } from 'react-router-dom'

const Ring = () => {
    const [ringName, setRingName] = useState('')
    const [ringPrice, setRingPrice] = useState('')
    const [ringCategory, setRingCategory] = useState('')
    const [ringDescription, setRingDescription] = useState('')
    const [ringDetailDescription, setRingDetailDescription] = useState('')
    //for response data
    const [rings, setRings] = useState([])

    const [ringImagea, setRingImagea] = useState(null)
    //const [ringImageb, setRingImageb] = useState(null)
    //const [ringImagec, setRingImagec] = useState(null)

    const [previewImagea, setPreviewImagea] = useState(null)
    //const [previewImageb, setPreviewImageb] = useState(null)
    //const [previewImagec, setPreviewImagec] = useState(null)

    const handleImageaUpload = (event) => {
        // const file = e.target.files[0]
        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     setRingImage(reader.result);
        // }
        // if(file){
        //     reader.readAsDataURL(file)
        // }
        setRingImagea(event.target.files[0])
        const readera = new FileReader()
        readera.onload = () => {
            setPreviewImagea(readera.result)
        }
        readera.readAsDataURL(event.target.files[0])
    }
    // const handleImagebUpload = (event) => {
    //     setRingImageb(event.target.files[0])
    //     const readerb = new FileReader()
    //     readerb.onload = () => {

    //         setPreviewImageb(readerb.result)

    //     }
    //     readerb.readAsDataURL(event.target.files[0])
    // }
    // const handleImagecUpload = (event) => {

    //     setRingImagec(event.target.files[0])
    //     const readerc = new FileReader()
    //     readerc.onload = () => {

    //         setPreviewImagec(readerc.result)
    //     }
    //     readerc.readAsDataURL(event.target.files[0])
    // }
    const handleSummit = () => {
        const formData = new FormData()
        formData.append('ringName', ringName)
        formData.append('ringPrice', ringPrice)
        formData.append('ringCategory', ringCategory)
        formData.append('ringDescription', ringDescription)
        formData.append('ringDetailDescription', ringDetailDescription)
        formData.append('ringImagea', ringImagea)
        // formData.append('ringImageb', ringImageb)
        // formData.append('ringImagec', ringImagec)


        // calling the api
        addRingApi(formData).then(res => {
            toast.success("Ring Sucessfully Added")
        }).catch(err => {
            console.log(err)
            toast.error("Ring add failed!!")
        })
    }

    useEffect(() => {
        getAllRingsApi().then(res => {
            setRings(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete?")
        if (confirmDelete) {
            deleteRingApi(id).then(res => {
                toast.success("Ring delete Sucessfully")
            }).catch(err => {
                toast.error("Ring delete failed")
            })
        }
    }
    return (
        <>
            <div className='container mt-5'>
                <section className="best-seller-section container-padding">
                    <div className=" container">
                        <h5 className="section-subheading">Best Seller</h5>
                        <h5 className="section-heading1">Enjoy the best Seller earing this week</h5>
                    </div>
                    <div className="container mt-5">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {
                                rings.map((ring) => {
                                    return (
                                        <Link to={`/rings/details/${ring._id}`} className="col">

                                            <div className="best-seller-earing">
                                                <div className="text-center py-4">
                                                    <div className="ring-image">
                                                        <img src={ring.ringimagea} className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="ring-description">
                                                        <p className="section-subheading mb-1">{ring.ringcategory}</p>
                                                        <p className="mb-0 best-seller-heading">{ring.ringname}</p>
                                                        <p className="best-seller-sub-heading">{ring.ringdescription}</p>
                                                        <hr />
                                                        <p className="mb-0 best-seller-heading">NRP. {ring.ringprice}</p>
                                                        <button type="button" class="btn btn-about mt-3" data-mdb-ripple-color="dark">Shop Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }


                        </div>
                    </div>
                </section>
                <div className='d-flex justify-content-between'>
                    <h3>Rings</h3>
                    <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Add Product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <div class="mb-3">

                                            <label htmlFor="">Ring Name</label>
                                            <input
                                                onChange={(e) => setRingName(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Ring name' />

                                            <label className='mt-2' htmlFor="">Ring Price</label>
                                            <input
                                                onChange={(e) => setRingPrice(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Ring price' />

                                            <label className='mt-2' htmlFor="">Ring Category</label>
                                            <input
                                                onChange={(e) => setRingCategory(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Ring category' />

                                            <label className='mt-2' htmlFor="">Ring Description</label>
                                            <textarea
                                                onChange={(e) => setRingDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Rings Detail Description</label>
                                            <textarea
                                                onChange={(e) => setRingDetailDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Ring Image1</label>
                                            <input onChange={handleImageaUpload} type="file" class="form-control" placeholder='Enter Ring image 1' />
                                            {
                                                // ringImage && <img src={ringImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImagea && <img src={previewImagea} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            {/* <label className='mt-2' htmlFor="">Ring Image2</label>
                                            <input onChange={handleImagebUpload} type="file" class="form-control" placeholder='Enter ring image 2' />
                                            {
                                                // ringImage && <img src={ringImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImageb && <img src={previewImageb} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            <label className='mt-2' htmlFor="">Ring Image3</label>
                                            <input onChange={handleImagecUpload} type="file" class="form-control" placeholder='Enter ring image 3' />
                                            {
                                                // ringImage && <img src={ringImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImagec && <img src={previewImagec} alt="" className='object-cover mb-3' height={'100px'} />
                                            } */}

                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={handleSummit}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table mt-3">
                    <thead class="table-info">
                        <tr>
                            <th scope="col">Ring Image</th>
                            <th scope="col">Ring Name</th>
                            <th scope="col">Ring Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rings.map(ring => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={ring.ringimagea} alt="" height={40} />
                                        </td>
                                        <td>{ring.ringname}</td>
                                        <td>{ring.ringprice}</td>
                                        <td>{ring.ringcategory}</td>
                                        <td>{ring.ringdescription}</td>
                                        <td>

                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to={`/admin/ring/edit/${ring._id}`} type="button" class="btn btn-success">Edit</Link>
                                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(ring._id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Ring