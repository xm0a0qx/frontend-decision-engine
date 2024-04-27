<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 class="col-md-6">Request loan</h2>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="personalCode">Personal Code:</label>
                        <input class="form-control" type="text" id="personalCode" v-model="personalCode" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="periodInMonths">Period in Months:</label>
                        <input class="form-control" type="number" id="periodInMonths" v-model="periodInMonths" min="12" max="60" step="1" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-form-label" for="loanAmount">Loan Amount:</label>
                        <input class="form-control" type="number" id="loanAmount" v-model="loanAmount" min="2000" max="10000" step="100" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mt-5">
                        <button class="btn btn-primary" @click="getLoanDecision">Check decision</button>
                    </div>
                </div>

                <p class="col-md-6 mt-5">Loan approved: {{ decision.isAmountApproved }}</p>
                <p class="col-md-6">Maximum loan amount: {{ decision.amount }}</p>
                <p class="col-md-6">Period: {{ decision.period }}</p>
            </div>
        </div>
    </div>
</template>


<script>

import DecisionService from '../services/DecisionService';

export default {
    name: 'LoanDecision',
    data() {
        return {
            personalCode: '',
            periodInMonths: '',
            loanAmount: '',
            decision: {}
        }
    },
    methods: {
        async getLoanDecision() {

            const data = {
                personalCode: this.personalCode,
                periodInMonths: this.periodInMonths,
                loanAMount: this.loanAmount
            };

            try {
                DecisionService.getLoanDecision(data).then((response) => {
                    this.decision = response.data;
                });
            } catch (error) {
                console.error(error.message);
            }
        }
    }
}

</script>
