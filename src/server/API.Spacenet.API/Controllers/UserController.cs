using API.Spacenet.Application.DTOs;
using API.Spacenet.Application.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Spacenet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("Token")]
        public async Task<ActionResult> PostAsync([FromBody] UserDTO userDTO)
        {
            var result = await _userService.GenerateTokenAsync(userDTO);
            if(result.IsSuccess)
                return Ok(result.Data);

            return BadRequest(result);
        }

    }
}
