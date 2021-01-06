import toastr from 'toastr';

     toastr.options = {
        "progressBar": true,
        "showDuration": "0",
        "timeOut": "2500",
        "showMethod": "show",
    }
const showToastrInfo = () => toastr["warning"]("По вашему запросу ничего не найдено",)
const showToastrSuccess = (quantityImg) =>toastr["success"](`По вашему запросу найдено: ${quantityImg} изображений`)
export { showToastrInfo, showToastrSuccess }