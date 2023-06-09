import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addBraceletApi, deleteBraceletApi, getAllBraceletsApi } from '../../apis/Api'
import { Link } from 'react-router-dom'

const Bracelet = () => {
    const [braceletName, setBraceletName] = useState('')
    const [braceletPrice, setBraceletPrice] = useState('')
    const [braceletCategory, setBraceletCategory] = useState('')
    const [braceletDescription, setBraceletDescription] = useState('')
    const [braceletDetailDescription, setBraceletDetailDescription] = useState('')
    //for response data
    const [bracelets, setBracelets] = useState([])

    const [braceletImagea, setBraceletImagea] = useState(null)
    //const [braceletImageb, setBraceletImageb] = useState(null)
    //const [braceletImagec, setBraceletImagec] = useState(null)

    const [previewImagea, setPreviewImagea] = useState(null)
    //const [previewImageb, setPreviewImageb] = useState(null)
    //const [previewImagec, setPreviewImagec] = useState(null)

    const handleImageaUpload = (event) => {
        // const file = e.target.files[0]
        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     setBraceletImage(reader.result);
        // }
        // if(file){
        //     reader.readAsDataURL(file)
        // }
        setBraceletImagea(event.target.files[0])
        const readera = new FileReader()
        readera.onload = () => {
            setPreviewImagea(readera.result)
        }
        readera.readAsDataURL(event.target.files[0])
    }
    // const handleImagebUpload = (event) => {
    //     setBraceletImageb(event.target.files[0])
    //     const readerb = new FileReader()
    //     readerb.onload = () => {

    //         setPreviewImageb(readerb.result)

    //     }
    //     readerb.readAsDataURL(event.target.files[0])
    // }
    // const handleImagecUpload = (event) => {

    //     setBraceletImagec(event.target.files[0])
    //     const readerc = new FileReader()
    //     readerc.onload = () => {

    //         setPreviewImagec(readerc.result)
    //     }
    //     readerc.readAsDataURL(event.target.files[0])
    // }
    const handleSummit = () => {
        const formData = new FormData()
        formData.append('braceletName', braceletName)
        formData.append('braceletPrice', braceletPrice)
        formData.append('braceletCategory', braceletCategory)
        formData.append('braceletDescription', braceletDescription)
        formData.append('braceletDetailDescription', braceletDetailDescription)
        formData.append('braceletImagea', braceletImagea)
        // formData.append('braceletImageb', braceletImageb)
        // formData.append('braceletImagec', braceletImagec)


        // calling the api
        addBraceletApi(formData).then(res => {
            toast.success("Bracelet Sucessfully Added")
        }).catch(err => {
            console.log(err)
            toast.error("Bracelet add failed!!")
        })
    }

    useEffect(() => {
        getAllBraceletsApi().then(res => {
            setBracelets(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete?")
        if (confirmDelete) {
            deleteBraceletApi(id).then(res => {
                toast.success("Bracelet delete Sucessfully")
            }).catch(err => {
                toast.error("Bracelet delete failed")
            })
        }
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='d-flex justify-content-between'>
                    <h3>Bracelets</h3>
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

                                            <label htmlFor="">Bracelet Name</label>
                                            <input
                                                onChange={(e) => setBraceletName(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Bracelet name' />

                                            <label className='mt-2' htmlFor="">Bracelet Price</label>
                                            <input
                                                onChange={(e) => setBraceletPrice(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Bracelet price' />

                                            <label className='mt-2' htmlFor="">Bracelet Category</label>
                                            <input
                                                onChange={(e) => setBraceletCategory(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Bracelet category' />

                                            <label className='mt-2' htmlFor="">Bracelet Description</label>
                                            <textarea
                                                onChange={(e) => setBraceletDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Bracelets Detail Description</label>
                                            <textarea
                                                onChange={(e) => setBraceletDetailDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Bracelet Image1</label>
                                            <input onChange={handleImageaUpload} type="file" class="form-control" placeholder='Enter Bracelet image 1' />
                                            {
                                                // braceletImage && <img src={braceletImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImagea && <img src={previewImagea} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            {/* <label className='mt-2' htmlFor="">Bracelet Image2</label>
                                            <input onChange={handleImagebUpload} type="file" class="form-control" placeholder='Enter bracelet image 2' />
                                            {
                                                // braceletImage && <img src={braceletImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImageb && <img src={previewImageb} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            <label className='mt-2' htmlFor="">Bracelet Image3</label>
                                            <input onChange={handleImagecUpload} type="file" class="form-control" placeholder='Enter bracelet image 3' />
                                            {
                                                // braceletImage && <img src={braceletImage} alt="" className='object-cover mb-3' height={'100px'}/>
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
                            <th scope="col">Bracelet Image</th>
                            <th scope="col">Bracelet Name</th>
                            <th scope="col">Bracelet Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bracelets.map(bracelet => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={bracelet.bracimagea} alt="" height={40} />
                                        </td>
                                        <td>{bracelet.bracname}</td>
                                        <td>{bracelet.bracprice}</td>
                                        <td>{bracelet.braccategory}</td>
                                        <td>{bracelet.bracdescription}</td>
                                        <td>

                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to={`/admin/bracelet/edit/${bracelet._id}`} type="button" class="btn btn-success">Edit</Link>
                                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(bracelet._id)}>Delete</button>
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

export default Bracelet