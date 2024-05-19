
function validatePositiveAmount(value, fieldName) {
    if (!Number.isInteger(value) || value <= 0) {
        return `${fieldName} should be a positive integer.`;
    }
    return null;
}
  
function validateInvestmentFrequency(investmentFrequency) {
    const frequencies = ["daily", "weekly", "bi-weekly", "monthly", "quarterly", "yearly"];
    if (!investmentFrequency || !frequencies.includes(investmentFrequency.toLowerCase())) {
        return 'Investment frequency should be one of the following: daily, weekly, bi-weekly, monthly, quarterly, or yearly.'
    }
    return null;
}

function validateStrategy(strategy) {
    if (!strategy || typeof strategy !== 'string') {
        return 'Please type strategy.';
    }
    return null;
}

function validateInvestmentRequestBody(req, res, next) {
    const { "Investment Amount" : investmentAmount, "Investment Frequency": investmentFrequency, "Financial Goals": financialGoals, "Strategy": strategy } = req.body;
    console.log(investmentAmount)
    const investmentAmountError = validatePositiveAmount(investmentAmount, 'Investment Amount');
      if (investmentAmountError) {
        return res.status(400).json({ error: investmentAmountError });
      }

    const financialGoalsError = validatePositiveAmount(financialGoals, 'Financial Goals');
      if (financialGoalsError) {
        return res.status(400).json({ error: financialGoalsError });
      }

    const investmentFrequencyError = validateInvestmentFrequency(investmentFrequency);
      if (investmentFrequencyError) {
        return res.status(400).json({ error: investmentFrequencyError });
      }

    const strategyError = validateStrategy(strategy);
      if (strategyError) {
        return res.status(400).json({ error: strategyError });
      }

    next();
}

module.exports = validateInvestmentRequestBody;

  