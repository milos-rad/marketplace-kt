import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts'

const AdminAnalytics = ({ user }) => {
  const options = {
    dataLabels: {
      enabled: true
    },
    xaxis: {
      type: 'date',
      categories: [1, 2, 3, 4, 5, 6]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    }
  }

  const series = [
    {
      name: 'Monthly Sales',
      data: [5, 4, 3, 4, 5, 6]
    }
  ]

  return (
    <div className='admin-analytics'>
      <div>
        <div className='font-36 pt-3'>Analytics</div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='p-3 bg-white keto-rounded-lg mt-3 keto-shadow'>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Total Sales</span>
                    <span className='font-18'>$984K</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 9% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Total Earning</span>
                    <span className='font-18'>$147K</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 7% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Total Commission</span>
                    <span className='font-18'>$105K</span>
                  </div>
                  <small className='text-danger'><i className='fa fa-arrow-down'></i> 14% Since last month</small>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Total Affiliates</span>
                    <span className='font-18'>4,745</span>
                  </div>
                  <small className='text-danger'><i className='fa fa-arrow-down'></i> 3% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Total Customers</span>
                    <span className='font-18'>12,761</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 9% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>YTD Sign Ups</span>
                    <span className='font-18'>1,021</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 4% Since last month</small>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>YTD Clicks</span>
                    <span className='font-18'>24,871</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 9% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>YTD Sales</span>
                    <span className='font-18'>17,936</span>
                  </div>
                  <small className='text-danger'><i className='fa fa-arrow-down'></i> 2% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Conversion</span>
                    <span className='font-18'>$984K</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 9% Since last month</small>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Most Sold Item</span>
                    <span className='font-18'>KetoBoost</span>
                  </div>
                  <small className='text-danger'><i className='fa fa-arrow-down'></i> 3% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Trending Item</span>
                    <span className='font-18'>KIND Bar</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 9% Since last month</small>
                </div>
                <div className='my-3 mx-2'>
                  <div>
                    <span className='font-14 font-bold color-keto-secondary mr-2'>Top Grossing Item</span>
                    <span className='font-18'>Besti</span>
                  </div>
                  <small className='text-success'><i className='fa fa-arrow-up'></i> 12% Since last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-lg-4'>
          <div className='p-3 bg-white keto-rounded-lg mt-3 keto-shadow'>
            <div className='font-36 font-bold'>
              76.4%
            </div>
            <Chart
              options={options}
              series={series}
              type='area'
              height='150px'
              width='100%'
            />
          </div>
          <div className='p-3 bg-white keto-rounded-lg mt-3 keto-shadow'>
            <div className='text-center font-22'>
              Top 10 Earners
            </div>
            <div className='table-responsive'>
              <table className='table table-borderless'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Sales</th>
                    <th>Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, index) =>
                    <tr key={index}>
                      <td>
                        <div className='d-flex align-items-center p-1 mb-1'>
                          <img alt='SETIMG' src={user.avatar} className='rounded-circle mr-2' width='37px' />
                          <div style={{ lineHeight: '1' }}>
                            <div>Annette Black</div>
                            <small className='text-muted text-break'>Annette@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td className='color-keto-primary'>$37K</td>
                      <td>137</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='col-lg-8'>
          <div className='p-3 bg-white keto-rounded-lg mt-3 keto-shadow'>
            <div className='font-36 font-bold'>
              $452,819.37
            </div>
            <Chart
              options={options}
              series={series}
              type='area'
              height='400px'
              width='100%'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {})(AdminAnalytics)