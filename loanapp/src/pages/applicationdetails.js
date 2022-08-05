import { useForm ,  useFormContext , Controller} from "react-hook-form"

const Applicationdetails = () => {
  const {control} = useFormContext()

  return (
    <>
         <div class="ui raised very padded text container segment form">

                     <div class="field">
                           <label>Loan Amount</label>
                           <Controller
                              control={control}
                              name="loanAmount"
                              render={({ field }) => (
                                        <input type="number" required   placeholder="Amount"  {...field}/>
                                     )}
                            />
                     </div>

                  <div class="field">
                       <label>Interest Rate</label>
                       <Controller
                           control={control}
                           name="interestRate"
                           render={({ field }) => (
                                    <input type="text" required placeholder="Interest Rate" {...field}/>
                                 )}
                        />
                  </div>


  <div class="three fields">
  <div class="field">
      <label>Loan Tenture</label>
      <Controller
         control={control}
          name="tenture"
          render={({ field }) => (
            <input  type="number" required  placeholder="Tenture"  {...field}/>
          )}
       />

  </div>
    <div class="field">
        <label>Start Date</label>
        <Controller
           control={control}
           name="sDate"
            render={({ field }) => (
              <input type="text" required  placeholder="Start Date"{...field}/>
            )}
           />
    </div>
    <div class="field">
      <label>End Date</label>
      <Controller
         control={control}
         name="eDate"
          render={({ field }) => (
            <input type="text" required  placeholder="End Date" {...field}/>
          )}
        />
    </div>
  </div>

</div>
  </>

  )
}

export default Applicationdetails
