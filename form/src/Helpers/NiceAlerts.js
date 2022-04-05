import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const deleteAlert = async (title) =>{
  const alert = await Swal.fire({
    title,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it'
  })
  if (alert.isConfirmed) {
    Swal.fire(
      'Deleted',
      'Your account has been deleted.',
      'success'
    )
    return true
  }  
}


export const errorNotification = (text)=>{
  toast.error(text, {
    position: 'top-center',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}

export const successNotification = (text)=>{
  toast.success(text, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}