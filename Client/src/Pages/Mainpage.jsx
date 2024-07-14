import React, { useEffect, useState } from 'react'
import DashBoard from '../components/Dashboard';
import Counter from '../Pages/Counter';
import axios from 'axios';
const Mainpage = () => {
  const [platfrom,setSelect]=useState("");
  const [name,setname]=useState("");
  const [data,setdata]=useState(null);
  const [err,setError]=useState(null);
  const [Bio,setBio]=useState("");
    const [followers,setFollowers]=useState();
    const [following,setFollowing]=useState();
    const [posts,setPost]=useState();
    const [reached,setReached]=useState();
    const [activepromo,setActive]=useState();
    const [stories,setStories]=useState();
    const [save,setSaves]=useState();
    const [comments,setComments]=useState();
    const [Ads,setAds]=useState();
    const [shares,setShares]=useState();
    const [engaged,setengaged]=useState();
    const [content,setcontent]=useState();
    const [follows,setfollows]=useState();
    const handleChange=(e)=>
    {
      setSelect(e.target.value);
    }
    useEffect(() => {
      async function fetchData() {
        if (!platfrom) return; // Don't fetch if no platform is selected
  
        try {
          const response = await axios.get('http://localhost:3002/user/platfrom', {
            params: { newname: platfrom }
          });
  
          if (response.data && response.data.data && response.data.data.length > 0) {
            setdata(response.data.data[0]);
            setError(null);
          } else {
            setError('No data found for this platform');
          }
        } catch (err) {
          console.error(err);
          setError('An error occurred while fetching data');
        }
      }
  
      fetchData();
    }, [platfrom]);
    useEffect(() => {
      if (data) {
        setComments(data.comments || 0);
        setFollowers(data.followers || 0);
        setFollowing(data.following || 0);
        setAds(data.Ads || 0);
        setPost(data.post || 0);
        setReached(data.Reached || 0);
        setfollows(data.follows || 0);
        setSaves(data.saves || 0);
        setShares(data.shares || 0);
        setStories(data.stories || 0);
        setActive(data.promotions || 0);
        setengaged(data.engaged || 0);
        setname(data.name || '');
        setBio(data.Bio || '');
        setcontent(data.Content || 0);
      }
    }, [data]);
  return (
    <div>
        <DashBoard>
            <div className='h-full mt-3 '>
              <div className='w-fit mx-auto m-4 text-xl p-1 border-2'>
              <select value={platfrom} onChange={handleChange}>
        <option value="">Select Platform</option>
        <option value="Instagram">Instagram</option>
        <option value="facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
        <option value="Reddit">Reddit</option>
      </select>
      {err && <p>Error: {err}</p>}
              </div>
              {data&&(
              <div>
              <div class="section-1" className='flex-col sm:flex sm:flex-row mb-2'>
                   <div className='flex m-3 sm:m-0 sm:w-1/2  gap-3 justify-center items-center'>
                        <Counter targetCount={followers} message={"followers"}/>
                        <Counter targetCount={following} message={"Following"}/>
                        <Counter targetCount={posts} message={"Posts"}/>
                   </div>
                   <div className='m-3 sm:m-0 sm:w-1/2'>
                      <div className='border-2 mt-5 sm:w-1/2 sm:mx-auto rounded-md'>
                          <p className='ml-2 text-2xl mb-2'>{name}</p>
                          <hr></hr>
                          <p className='h-2/3 ml-2 text-md mt-2 mb-2'>{Bio}</p>
                          <hr></hr>
                          <div className='flex justify-around items-center mt-2 mb-2'>
                             <button className='border-2 p-1'>Insta</button>
                             <button className='border-2 p-1'>twitter</button>
                             <button className='border-2 p-1'>Rebbit</button>
                           </div>
                       </div>
                    </div>
               </div>
               <hr></hr>
               <div class='section2 ml-10 mt-4 sm:ml-60 mb-3'>
                <div className='grid grid-cols-2 gap-5 sm:grid-cols-3'>
                <Counter targetCount={reached} message={"Account reached"}/>
                <Counter targetCount={engaged} message={"Engaged"}/>
                <Counter targetCount={content} message={"Content"}/>
                <Counter targetCount={Ads} message={"Ad you run"}/>
                <Counter targetCount={activepromo} message={"Active promotions"}/>
                </div>
               </div>
               <hr></hr>
               <div class='section3 ml-10 mt-4 sm:ml-60 '>
                <div className='grid grid-cols-2 gap-5 sm:grid-cols-3'>
                <Counter targetCount={stories} message={"Total stories"}/>
                <Counter targetCount={follows} message={"Total follows"}/>
                <Counter targetCount={posts} message={"posts"}/>
                <Counter targetCount={save} message={"save"}/>
                <Counter targetCount={comments} message={"comments"}/>
                <Counter targetCount={shares} message={"Shares"}/>
                </div>
               </div>
            </div>
              )}
        </div>
        </DashBoard>
    </div>
  )
}

export default Mainpage;