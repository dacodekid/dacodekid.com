---
prev: false
next: false
---

# Internal Rate Of Return (IRR)

The Internal Rate of Return (IRR) is a fundamental financial metric widely used in capital budgeting. It represents the discount rate at which the Net Present Value (NPV) of a project or investment becomes zero. In other words, IRR is the rate at which an investment breaks even in terms of NPV.

## **Formula**

The IRR does not have a simple formula like NPV. Instead, it's found iteratively, typically using computational methods, since it's the root of the NPV equation:

$$
\begin{align}
0 &= \sum \frac{B_t - C_t}{(1 + IRR)^t}
\end{align}
$$

Where:

$$
\begin{aligned}
& B_t = \text{Net cash inflow during the period } t \\
& C_t = \text{Net cash outflow during the period } t \\
& IRR = \text{Internal Rate of Return} \\
& t = \text{Time period}
\end{aligned}
$$

## **Interpretation**

- If the IRR exceeds the required rate of return or the cost of capital, the project or investment is considered potentially good.
- If the IRR is below the required rate of return or the cost of capital, the project might not be considered viable.

## **Strengths**

- Provides a percentage return, which can be easily compared against other investments or rates of return.
- Accounts for the time value of money.

## **Limitations**

- Projects with non-conventional cash flows (multiple sign changes) can have multiple IRRs, making interpretation tricky.
- Assumes reinvestment of cash inflows at the IRR itself, which might not be realistic.

## **Example**

If a project has an IRR of 15% and the company's required rate of return is 10%, then the project is expected to provide a return above what the company requires, making it a potentially good investment.
