import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addEaringApi, deleteEaringApi, getAllEaringsApi } from '../../apis/Api'
import { Link } from 'react-router-dom'

const Earing = () => {
    const [earingName, setEaringName] = useState('')
    const [earingPrice, setEaringPrice] = useState('')
    const [earingCategory, setEaringCategory] = useState('')
    const [earingDescription, setEaringDescription] = useState('')
    const [earingDetailDescription, setEaringDetailDescription] = useState('')
    //for response data
    const [earings, setEarings] = useState([])

    const [earingImagea, setEaringImagea] = useState(null)
    //const [earingImageb, setEaringImageb] = useState(null)
    //const [earingImagec, setEaringImagec] = useState(null)

    const [previewImagea, setPreviewImagea] = useState(null)
    //const [previewImageb, setPreviewImageb] = useState(null)
    //const [previewImagec, setPreviewImagec] = useState(null)

    const handleImageaUpload = (event) => {
        // const file = e.target.files[0]
        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     setEaringImage(reader.result);
        // }
        // if(file){
        //     reader.readAsDataURL(file)
        // }
        setEaringImagea(event.target.files[0])
        const readera = new FileReader()
        readera.onload = () => {
            setPreviewImagea(readera.result)
        }
        readera.readAsDataURL(event.target.files[0])
    }
    // const handleImagebUpload = (event) => {
    //     setEaringImageb(event.target.files[0])
    //     const readerb = new FileReader()
    //     readerb.onload = () => {

    //         setPreviewImageb(readerb.result)

    //     }
    //     readerb.readAsDataURL(event.target.files[0])
    // }
    // const handleImagecUpload = (event) => {

    //     setEaringImagec(event.target.files[0])
    //     const readerc = new FileReader()
    //     readerc.onload = () => {

    //         setPreviewImagec(readerc.result)
    //     }
    //     readerc.readAsDataURL(event.target.files[0])
    // }
    const handleSummit = () => {
        const formData = new FormData()
        formData.append('earingName', earingName)
        formData.append('earingPrice', earingPrice)
        formData.append('earingCategory', earingCategory)
        formData.append('earingDescription', earingDescription)
        formData.append('earingDetailDescription', earingDetailDescription)
        formData.append('earingImagea', earingImagea)
        // formData.append('earingImageb', earingImageb)
        // formData.append('earingImagec', earingImagec)


        // calling the api
        addEaringApi(formData).then(res => {
            toast.success("Earing Sucessfully Added")
        }).catch(err => {
            console.log(err)
            toast.error("Earing add failed!!")
        })
    }

    useEffect(() => {
        getAllEaringsApi().then(res => {
            setEarings(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete?")
        if (confirmDelete) {
            deleteEaringApi(id).then(res => {
                toast.success("Earing delete Sucessfully")
            }).catch(err => {
                toast.error("Earing delete failed")
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
                                earings.map((earing) => {
                                    return (
                                        <Link to={`/earings/details/${earing._id}`} className="col">
                                            
                                            <div className="best-seller-earing">
                                                <div className="text-center py-4">
                                                    <div className="earing-image">
                                                        <img src={earing.earimagea} className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="earing-description">
                                                        <p className="section-subheading mb-1">{earing.earcategory}</p>
                                                        <p className="mb-0 best-seller-heading">{earing.earname}</p>
                                                        <p className="best-seller-sub-heading">{earing.eardescription}</p>
                                                        <hr />
                                                        <p className="mb-0 best-seller-heading">NRP. {earing.earprice}</p>
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
                    <h3>Earings</h3>
                    <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Add Product
                    </button> <br />

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

                                            <label htmlFor="">Earing Name</label>
                                            <input
                                                onChange={(e) => setEaringName(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter earing name' />

                                            <label className='mt-2' htmlFor="">Earing Price</label>
                                            <input
                                                onChange={(e) => setEaringPrice(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter earing price' />

                                            <label className='mt-2' htmlFor="">Earing Category</label>
                                            <input
                                                onChange={(e) => setEaringCategory(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter earing category' />

                                            <label className='mt-2' htmlFor="">Earing Description</label>
                                            <textarea
                                                onChange={(e) => setEaringDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Earings Detail Description</label>
                                            <textarea
                                                onChange={(e) => setEaringDetailDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Earing Image1</label>
                                            <input onChange={handleImageaUpload} type="file" class="form-control" placeholder='Enter earing image 1' />
                                            {
                                                // earingImage && <img src={earingImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImagea && <img src={previewImagea} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            {/* <label className='mt-2' htmlFor="">Earing Image2</label>
                                            <input onChange={handleImagebUpload} type="file" class="form-control" placeholder='Enter earing image 2' />
                                            {
                                                // earingImage && <img src={earingImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImageb && <img src={previewImageb} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            <label className='mt-2' htmlFor="">Earing Image3</label>
                                            <input onChange={handleImagecUpload} type="file" class="form-control" placeholder='Enter earing image 3' />
                                            {
                                                // earingImage && <img src={earingImage} alt="" className='object-cover mb-3' height={'100px'}/>
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
                            <th scope="col">Earing Image</th>
                            <th scope="col">Earing Name</th>
                            <th scope="col">Earing Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            earings.map(earing => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={earing.earimagea} alt="" height={40} />
                                        </td>
                                        <td>{earing.earname}</td>
                                        <td>{earing.earprice}</td>
                                        <td>{earing.earcategory}</td>
                                        <td>{earing.eardescription}</td>
                                        <td>

                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to={`/admin/earing/edit/${earing._id}`} type="button" class="btn btn-success">Edit</Link>
                                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(earing._id)}>Delete</button>
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

export default Earing