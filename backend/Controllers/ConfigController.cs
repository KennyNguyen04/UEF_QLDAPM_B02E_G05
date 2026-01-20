using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheWanderingRose.API.Data;
using TheWanderingRose.API.DTOs;
using TheWanderingRose.API.Models;

namespace TheWanderingRose.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ConfigController : ControllerBase
{
    private readonly AppDbContext _context;

    public ConfigController(AppDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Lấy tỷ lệ phụ thu cuối tuần hiện tại
    /// </summary>
    [HttpGet("weekend-surcharge")]
    public async Task<ActionResult<ApiResponse<WeekendSurchargeRateDto>>> GetWeekendSurchargeRate()
    {
        var config = await _context.SystemConfigs
            .FirstOrDefaultAsync(c => c.ConfigKey == "WEEKEND_SURCHARGE_RATE");

        if (config == null)
        {
            // Trả về giá trị mặc định nếu chưa có config
            return Ok(new ApiResponse<WeekendSurchargeRateDto>(
                true, 
                "Lấy tỷ lệ phụ thu thành công.", 
                new WeekendSurchargeRateDto(10m)
            ));
        }

        var rate = decimal.TryParse(config.ConfigValue, out var parsedRate) ? parsedRate : 10m;
        
        return Ok(new ApiResponse<WeekendSurchargeRateDto>(
            true, 
            "Lấy tỷ lệ phụ thu thành công.", 
            new WeekendSurchargeRateDto(rate)
        ));
    }

    /// <summary>
    /// Cập nhật tỷ lệ phụ thu cuối tuần (Admin)
    /// </summary>
    [HttpPut("weekend-surcharge")]
    public async Task<ActionResult<ApiResponse<WeekendSurchargeRateDto>>> UpdateWeekendSurchargeRate([FromBody] UpdateConfigDto dto)
    {
        // Validate input
        if (!decimal.TryParse(dto.ConfigValue, out var rate))
        {
            return BadRequest(new ApiResponse<object>(false, "Giá trị không hợp lệ. Vui lòng nhập số.", null));
        }

        if (rate < 0 || rate > 100)
        {
            return BadRequest(new ApiResponse<object>(false, "Tỷ lệ phụ thu phải từ 0% đến 100%.", null));
        }

        var config = await _context.SystemConfigs
            .FirstOrDefaultAsync(c => c.ConfigKey == "WEEKEND_SURCHARGE_RATE");

        if (config == null)
        {
            // Tạo mới nếu chưa có
            config = new SystemConfig
            {
                ConfigKey = "WEEKEND_SURCHARGE_RATE",
                ConfigValue = rate.ToString(),
                Description = "Tỷ lệ phụ thu cuối tuần (%) - Áp dụng cho các đêm Thứ 7 và Chủ nhật",
                UpdatedAt = DateTime.UtcNow
            };
            _context.SystemConfigs.Add(config);
        }
        else
        {
            config.ConfigValue = rate.ToString();
            config.UpdatedAt = DateTime.UtcNow;
        }

        await _context.SaveChangesAsync();

        return Ok(new ApiResponse<WeekendSurchargeRateDto>(
            true, 
            "Cập nhật tỷ lệ phụ thu thành công.", 
            new WeekendSurchargeRateDto(rate)
        ));
    }

    /// <summary>
    /// Lấy tất cả cấu hình hệ thống (Admin)
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<ApiResponse<List<SystemConfigDto>>>> GetAllConfigs()
    {
        var configs = await _context.SystemConfigs
            .Select(c => new SystemConfigDto(c.ConfigKey, c.ConfigValue, c.Description))
            .ToListAsync();

        return Ok(new ApiResponse<List<SystemConfigDto>>(true, "Lấy cấu hình thành công.", configs));
    }
}
