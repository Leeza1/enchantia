import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addNecklaceApi, deleteNecklaceApi, getAllNecklacesApi } from '../../apis/Api'
import { Link } from 'react-router-dom'

const Necklace = () => {
    const [necklaceName, setNecklaceName] = useState('')
    const [necklacePrice, setNecklacePrice] = useState('')
    const [necklaceCategory, setNecklaceCategory] = useState('')
    const [necklaceDescription, setNecklaceDescription] = useState('')
    const [necklaceDetailDescription, setNecklaceDetailDescription] = useState('')
    //for response data
    const [necklaces, setNecklaces] = useState([])

    const [necklaceImagea, setNecklaceImagea] = useState(null)
    //const [necklaceImageb, setNecklaceImageb] = useState(null)
    //const [necklaceImagec, setNecklaceImagec] = useState(null)

    const [previewImagea, setPreviewImagea] = useState(null)
    //const [previewImageb, setPreviewImageb] = useState(null)
    //const [previewImagec, setPreviewImagec] = useState(null)

    const handleImageaUpload = (event) => {
        // const file = e.target.files[0]
        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     setNecklaceImage(reader.result);
        // }
        // if(file){
        //     reader.readAsDataURL(file)
        // }
        setNecklaceImagea(event.target.files[0])
        const readera = new FileReader()
        readera.onload = () => {
            setPreviewImagea(readera.result)
        }
        readera.readAsDataURL(event.target.files[0])
    }
    // const handleImagebUpload = (event) => {
    //     setNecklaceImageb(event.target.files[0])
    //     const readerb = new FileReader()
    //     readerb.onload = () => {

    //         setPreviewImageb(readerb.result)

    //     }
    //     readerb.readAsDataURL(event.target.files[0])
    // }
    // const handleImagecUpload = (event) => {

    //     setNecklaceImagec(event.target.files[0])
    //     const readerc = new FileReader()
    //     readerc.onload = () => {

    //         setPreviewImagec(readerc.result)
    //     }
    //     readerc.readAsDataURL(event.target.files[0])
    // }
    const handleSummit = () => {
        const formData = new FormData()
        formData.append('necklaceName', necklaceName)
        formData.append('necklacePrice', necklacePrice)
        formData.append('necklaceCategory', necklaceCategory)
        formData.append('necklaceDescription', necklaceDescription)
        formData.append('necklaceDetailDescription', necklaceDetailDescription)
        formData.append('necklaceImagea', necklaceImagea)
        // formData.append('necklaceImageb', necklaceImageb)
        // formData.append('necklaceImagec', necklaceImagec)


        // calling the api
        addNecklaceApi(formData).then(res => {
            toast.success("Necklace Sucessfully Added")
        }).catch(err => {
            console.log(err)
            toast.error("Necklace add failed!!")
        })
    }

    useEffect(() => {
        getAllNecklacesApi().then(res => {
            setNecklaces(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete?")
        if (confirmDelete) {
            deleteNecklaceApi(id).then(res => {
                toast.success("Necklace delete Sucessfully")
            }).catch(err => {
                toast.error("Necklace delete failed")
            })
        }
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='d-flex justify-content-between'>
                    <h3>Necklaces</h3>
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

                                            <label htmlFor="">Necklace Name</label>
                                            <input
                                                onChange={(e) => setNecklaceName(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Necklace name' />

                                            <label className='mt-2' htmlFor="">Necklace Price</label>
                                            <input
                                                onChange={(e) => setNecklacePrice(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Necklace price' />

                                            <label className='mt-2' htmlFor="">Necklace Category</label>
                                            <input
                                                onChange={(e) => setNecklaceCategory(e.target.value)}
                                                type="text" class="form-control" placeholder='Enter Necklace category' />

                                            <label className='mt-2' htmlFor="">Necklace Description</label>
                                            <textarea
                                                onChange={(e) => setNecklaceDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Necklaces Detail Description</label>
                                            <textarea
                                                onChange={(e) => setNecklaceDetailDescription(e.target.value)} className='form-control' name="" id="" rows={4}></textarea>

                                            <label className='mt-2' htmlFor="">Necklace Image1</label>
                                            <input onChange={handleImageaUpload} type="file" class="form-control" placeholder='Enter Necklace image 1' />
                                            {
                                                // necklaceImage && <img src={necklaceImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImagea && <img src={previewImagea} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            {/* <label className='mt-2' htmlFor="">Necklace Image2</label>
                                            <input onChange={handleImagebUpload} type="file" class="form-control" placeholder='Enter necklace image 2' />
                                            {
                                                // necklaceImage && <img src={necklaceImage} alt="" className='object-cover mb-3' height={'100px'}/>
                                                previewImageb && <img src={previewImageb} alt="" className='object-cover mb-3' height={'100px'} />
                                            }
                                            <label className='mt-2' htmlFor="">Necklace Image3</label>
                                            <input onChange={handleImagecUpload} type="file" class="form-control" placeholder='Enter necklace image 3' />
                                            {
                                                // necklaceImage && <img src={necklaceImage} alt="" className='object-cover mb-3' height={'100px'}/>
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
                            <th scope="col">Necklace Image</th>
                            <th scope="col">Necklace Name</th>
                            <th scope="col">Necklace Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            necklaces.map(necklace => {
                                return (
                                    <tr>
                                        <td>
                                            <img src={necklace.necimagea} alt="" height={40} />
                                        </td>
                                        <td>{necklace.necname}</td>
                                        <td>{necklace.necprice}</td>
                                        <td>{necklace.neccategory}</td>
                                        <td>{necklace.necdescription}</td>
                                        <td>

                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <Link to={`/admin/necklace/edit/${necklace._id}`} type="button" class="btn btn-success">Edit</Link>
                                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(necklace._id)}>Delete</button>
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

export default Necklace