import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import RvHookupOutlinedIcon from '@mui/icons-material/RvHookupOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom";

const Sidebar = ()=> {
  
        return (
            <div className="sidebar">
              <div className="top">
                  <Link to="/" style={{textDecoration: "none"}}>
                  <span className="logo">htechadmin</span>
                  </Link>
            </div>
            <hr />
              <div className="center">
                  <ul>
                      <p className="title">MAIN</p>
                      <li>
                          <DashboardIcon  className="icon"/>
                          <span>Dashboard</span>
                      </li>
                      <p className="title">LIST</p>
                      <li>
                      <Link to="/users" style={{textDecoration: "none"}}>
                      <PersonOutlineOutlinedIcon className="icon" />
                          <span>Users</span>
                    </Link> 
                      </li>
                      <li>
                      <Link to="/products" style={{textDecoration: "none"}}>
                          <Inventory2OutlinedIcon  className="icon"/>
                          <span>Products</span>
                    </Link>
                      </li>
                      <li>
                          <CreditCardOutlinedIcon  className="icon"/>
                          <span>Orders</span>
                      </li>
                      <li>
                          <RvHookupOutlinedIcon  className="icon"/>
                          <span>Delevery</span>
                      </li>
                      <p className="title">USEFUL</p>
                      <li>
                          <QueryStatsOutlinedIcon  className="icon" />
                          <span>Stats</span>
                      </li>
                      <li>
                          <AdUnitsOutlinedIcon  className="icon"/>
                          <span>Notification</span>
                      </li>
                      <p className="title">SERVICE</p>
                      <li>
                          <FitnessCenterOutlinedIcon  className="icon"/>
                          <span>System Health</span>
                      </li>
                      <li>
                          <PsychologyOutlinedIcon  className="icon"/>
                          <span>Logs</span>
                      </li>
                      <li>
                          <SettingsOutlinedIcon className="icon"/>
                          <span>Settings</span>
                      </li>
                      <p className="title">USER</p>
                      <li>
                          <PermContactCalendarOutlinedIcon className="icon"/>
                          <span>Profile</span>
                      </li>
                      <li>
                          <LogoutOutlinedIcon className="icon"/>
                          <span>Logout</span>
                      </li>
                  </ul>
              </div>
              <div className="bottom">
                  <div className="colorOption"></div>
                  <div className="colorOption"></div>
              </div>
            </div>
        );
    
}

export default Sidebar;