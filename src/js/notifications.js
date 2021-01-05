import toastr from 'toastr';


     toastr.options = {
        "progressBar": true,
        "showDuration": "0",
        "timeOut": "2500",
        "showMethod": "show",
    }
 const showToastrInfo = () => toastr["warning"]("По вашему запросу ничего не найдено",)
// const showToastrError = () =>error("Уточните запрос","Ошибка!Такой страны не существует")
export default showToastrInfo