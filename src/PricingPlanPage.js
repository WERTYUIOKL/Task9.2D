// PricingPlanPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingPlanPage.css';

const PricingPlanPage = () => {
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        if (plan === 'premium' || plan === 'gold') {
            navigate('/payment');
        } else {
            alert("You have selected the Free Plan. Enjoy basic access!");
        }
    };

    return (
        <div className="pricing-page">
            <h1 className="pricing-title">Choose Your Plan</h1>
            <div className="plan-card">
                <h2>Free Plan</h2>
                <p>Basic access with limited features.</p>
                <button 
                    className="select-button"
                    onClick={() => handleSelectPlan('free')}
                >
                    Select Free Plan
                </button>
            </div>
            <div className="plan-card">
                <h2>Premium Plan($999/month)</h2>
                <p>Get access to customization, analytics dashboard, themes, and more.</p>
                <button 
                    className="select-button premium-button"
                    onClick={() => handleSelectPlan('premium')}
                >
                    Select Premium Plan
                </button>
            </div>

            <div className="plan-card">
                <h2>Gold Plan($1499/month)</h2>
                <p>Get access to personal AI assitant and many more new features.</p>
                <button 
                    className="select-button gold-button"
                    onClick={() => handleSelectPlan('gold')}
                >
                    Select Gold Plan
                </button>
            </div>
        </div>
    );
};

export default PricingPlanPage;
